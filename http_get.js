import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  vus: 100,
  rps: 200,
  duration: "15m"
};
export default function() {
  
  let id = Math.floor(Math.random() * Math.max(9000000));

  let res = http.get(`http://localhost:3001/api/restaurants/${id}/menu`);
  check(res, {
    "success": (r) => r.status == 200
  });
//   sleep[1]
};

