export default class FetchData {

  baseUrl = 'https://api.spacexdata.com/v4/';
  
  getResource = async url => {
    const res = await fetch(url);

    if(!res.ok) {
      throw new Error (`Произошла ошибка. ${res.status}`);
    }

    return await res.json();
  };

  getRocket = async () => await this.getResource(this.baseUrl + 'rockets');

  getLaunches = async () => await this.getResource(this.baseUrl + 'launches/past');

  getCompany = async () => await this.getResource(this.baseUrl + 'company');
}