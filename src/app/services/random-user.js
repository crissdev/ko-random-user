import jQuery from 'jquery';

const endpoint = 'http://api.randomuser.me/';


export function next() {
  return new Promise((resolve, reject) => {
    jQuery.ajax({ url: endpoint, dataType: 'json', cache: false })
      .done(function(data) {
        if (data.error) {
          reject(data.error);
        }
        else {
          resolve(data.results[0].user);
        }
      })
      .fail(function(jqXHR, status, statusText) {
        reject({error: statusText});
      });
  });
}
