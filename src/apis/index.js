import axios from 'axios';

const username = process.env.REACT_APP_GITHUB_USERNAME;
const accessToken = process.env.REACT_APP_GITHUB_ACCESS_TOKEN;
const repo = process.env.REACT_APP_GITHUB_REPO;
console.log('username', username);
console.log('repo', repo);

const client = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 1000,
  auth: {
    username,
    password: accessToken,
  },
});

export const fetchUser = async () => {
  try {
    const res = await client.get('/user');
    return res.data;
  } catch (e) {
    console.error(e);
  }
};

export const fetchIssueList = async ({ owner, params }) => {
  try {
    const res = await client.get(`/repos/${owner}/${repo}/issues`, {
      params,
    });
    return res.data;
  } catch (e) {
    console.error(e);
  }
};

export const createIssue = async ({ owner, data }) => {
  const res = await client.post(`/repos/${owner}/${repo}/issues`, data);
  return res.data;
};

export const updateIssue = async ({ owner, issueNumber, data }) => {
  const res = await client.post(
    `/repos/${owner}/${repo}/issues/${issueNumber}`,
    data
  );
  return res.data;
};
