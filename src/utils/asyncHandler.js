const asyncHandler = (handler) => async (req, res, next) => {
    try {
        await handler(req, res, next, error)
    } catch (error) {
        res.status(error.code || 500).json({
            success: false,
            message: error.message,
        })
    }
}

export { asyncHandler }
