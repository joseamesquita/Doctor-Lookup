import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Doctor } from "./doctor-lookup";

$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();
    (async () => {
      let doc = new Doctor();
      let response = await doc.findDoctor();
      getInfo(response)
    })
    function getInfo(response) {

    }
  })
})