export const fetchDataPromise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = false;
        if (success) {
          resolve("Data fetched successfully!");
        } else {
          reject("Failed to fetch data.");
        }
      }, 1000);
    });
  };