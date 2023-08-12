import {configureStore} from '@reduxjs/toolkit'
import {contactsReducer} from './contactsSlice'
import {filterReducer} from './filterSlice'
import { persistStore, FLUSH, PAUSE, REHYDRATE, REGISTER, PURGE,PERSIST } from 'redux-persist'

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH, PAUSE, REHYDRATE, REGISTER, PURGE,PERSIST]
        },
    }),
})

export const persistore = persistStore(store);