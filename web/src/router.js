let history = isServer ? createMemoryHistory() : createWebHistory()
let router = createRouter({ routes, history })

router.push(req.url) // request url
router.isReady().then(() => {
    // resolve the request
})

