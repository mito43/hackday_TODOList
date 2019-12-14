import localstorage from 'store';

const storage = {
  setStorage : (key,value) => {
    if (!key || !value) {
      return;
    }
    localstorage.set(key, value);
  },
  getStorage : key => {
    if (!key) {
      return;
    }

    return localstorage.get(key);
  },
};

export {storage};
