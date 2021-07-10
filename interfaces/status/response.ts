import Service from './service';

interface StatusResponse {

    success: boolean
    code: string
    data: Array<Service>

}

export default StatusResponse;