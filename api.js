let apiUrl = 'http://localhost:8000/api/'

if (import.meta.env.NODE_ENV==='production') {
    apiUrl = import.meta.env.VITE_API
}

export default apiUrl