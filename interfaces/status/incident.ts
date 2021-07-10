interface Incident {

    id: number
    timestamp: number
    duration: number
    type: number
    reason: {
        code: string
        detail: string
    }

}

export default Incident;