export class TestUtils {
    getEnvironmentURL() {
        let url = this.isUrlDefined();
        switch (Cypress.env('ENV')) {
            case 'PRODV1':
                url = `${url}/tlcHackathonMasterV1.html`;
                break;
            case 'DEV':
                url = `${url}/tlcHackathonDev.html`;
                break;
            case 'PRODV2':
                url = `${url}/tlcHackathonMasterV2.html`;
                break;
            default:
                throw "Environment variable 'ENV' needs to be defined. Supported environment name are: DEV, PRODV1 or PRODV2";
        }
        return url;
    }

    isUrlDefined() {
        let url = Cypress.env('URL');
        if (url === '') {
            throw `Environment variable URL must be defined is empty must be defined`;
        }
        return url;
    }
}