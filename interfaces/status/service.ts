import Status from '../../enums/status/status';

interface Service {

    id: number
    name: string
    response_time: number
    status: Status

}

export default Service;