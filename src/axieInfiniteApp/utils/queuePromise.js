import pLimit from "p-limit";

const limit = pLimit(4);

const queuePromise = async (promise) => {
  const promises = [promise].map((task) => limit(() => task()));
  const [result] = await Promise.all(promises);

  return result;
};

queuePromise.clearQueue = () => limit.clearQueue();

export default queuePromise;
