import io from 'socket.io-client'
import $ from 'jquery'
// export function createSocket() {

// }


console.log('socketDocument')
const socket = io('http://localhost:3001');

socket.on('connect', () => {
  console.log('connecting');
})

$('.gameBox').on('click', (e) => {
  console.log(e);
})