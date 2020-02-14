export class Doctor {
  async findDoctor() {
    try {
      let response = await fetch('https://api.betterdoctor.com/2016-03-01/doctors?location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=e47ae5310bdb049364b12288b1e20a98=${process.env.API_KEY}');
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      }
      else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch (error) {
      return false;
    };
  }
}