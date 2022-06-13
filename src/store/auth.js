import router from '../router'
import { auth } from '../firebase'
import { getDatabase, set, ref } from "firebase/database";
import {
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth'

export default {
    getters: {
        getUser(state) {
            return state.user
        }
    },
    state: {
        user: {}
    },
    mutations: {
        SET_USER(state, user) {
            state.user = user;
        },
        CLEAR_USER(state) {
            state.user = null;            
        }
    },
    actions: {
        async login({commit}, details) {
            const { email, password } = details;
            try {
                await signInWithEmailAndPassword(auth, email, password)
            } catch (error) {
                switch(error.code) {
                    case 'auth/user-not-found':
                        alert('User not found!')
                        break                        
                    case 'auth/wrong-password':
                        alert('Wrong password!') 
                        break   
                    default: 'Something went wrong!'                      
                }
                return               
            }
            commit('SET_USER', auth.currentUser)
            router.push('/')
        },

        async register({commit, dispatch}, details) {
            const { name, email, password } = details;
            try {
                await createUserWithEmailAndPassword(auth, email, password);

                const db = getDatabase();
                const uid = await dispatch('getUid');
                await set(ref(db, 'users/' + uid + '/info'), {
                    name: name,
                    bill: 10000
                })

            } catch (error) {

                switch(error.code) {
                    case 'auth/invalid-email':
                        alert('Invalid email!')
                        break                        
                    case 'auth/weak-password':
                        alert('Weak password!') 
                        break  
                    case 'auth/operation-not-allowed':
                        alert('Operation not allowed!') 
                        break  
                    case 'auth/email-already-in-use':
                        alert('Email already in use!') 
                        break  
                    default: 'Something went wrong!'                      
                }
                return
            }
            commit('SET_USER', auth.currentUser)
            router.push('/')
        },

        getUid() {
            const user = auth.currentUser;
            return user ? user.uid : null;
        },

        async logout({commit}) {
            await signOut(auth);
            commit('CLEAR_INFO')
            commit('CLEAR_USER')
            router.push('/login')
        },

        fetchUser ({ commit }) {
            auth.onAuthStateChanged(async user => {
                if (user === null) {
                    commit('CLEAR_USER');
                } else {
                    commit('SET_USER', user)

                    if (router.isReady() && router.currentRoute.value.path === '/login') {
                        router.push('/');
                    }
                }
            })
        }
    }
}
