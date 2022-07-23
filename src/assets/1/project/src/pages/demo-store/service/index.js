/**
 * @file services/index.js
 * @author loveyilin <liujp19980918@163.com>
 */
import axios from 'axios';

export const getData = () => axios.get('/api/getData');
export const publish = data => axios.post('/api/publish', data);
