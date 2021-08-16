interface Incident {

    id: number
    timestamp: number
    duration: number
    type: number
    service: {
        id: number
        name: string
    }
    reason: {
        code: string
        detail: string
    }

}

export default Incident;