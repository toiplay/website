import Service from './service';
import Incident from './incident';

interface StatusResponse {

    services: Array<Service>
    incidents: Array<Incident>

}

export default StatusResponse;