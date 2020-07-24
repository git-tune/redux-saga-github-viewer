import axios from 'axios';

const requestApi = axios.create({
  baseURL: 'https://api.github.com',
});

export const fetchUser = async () => {
  try {
    const res = await requestApi.get();
    return res.data;
  } catch (e) {
    return;
  }
};

export const fetchIssueList = async () => {
  try {
    const res = await requestApi.get();
    return res.data;
  } catch (e) {
    return;
  }
};

export const createIssue = async () => {
  const res = await requestApi.post();
  return res.data;
};

export const updateIssue = async () => {
  const res = await requestApi.post();
  return res.data;
};
