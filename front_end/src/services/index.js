const headers = {
  'Content-Type': 'application/json',
  'Accepts': 'application/json'
}

const getUsers = () => {
  return fetch(`/api/v1/users`)
    .then(res => res.json())
}

const getGlasses = () => {
  return fetch('/api/v1/glasses')
    .then(res => res.json())
}

export const adapter = {
  users: {
    getUsers
  },
  glasses: {
    getGlasses
  }
};
