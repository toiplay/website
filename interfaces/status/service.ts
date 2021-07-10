import Status from '../../enums/status/status';
import Incident from './incident';

interface Service {

    id: number
    name: string
    response_time: number
    status: Status
    incidents: Array<Incident>

}

export default Service;