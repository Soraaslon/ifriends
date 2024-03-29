export const getURI = (uri, params) => {
  let aux = uri;
  for (let prop in params) {
    aux = aux.replace(new RegExp('{' + prop + '}', 'g'), params[prop]);
  }
  return aux;
};

const API = '/api';
export const PERGUNTAS = `${API}/perguntas`;