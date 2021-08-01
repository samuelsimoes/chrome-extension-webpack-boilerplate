import fetchParents from "./fetchParents";
import db from "./dbDriver";
import sleep from "./sleep";
import queuePromise from "./queuePromise";

export const getSireAndMatron = async (egg) => {
  const { sireId, matronId } = egg;

  const axiesDocument = db.getCollection("axies_list");
  let matron = axiesDocument.findOne({ id: matronId.toString() });
  let sire = axiesDocument.findOne({ id: sireId.toString() });

  if (!matron || !sire) {
    const parents = await queuePromise(async () => {
      await sleep(1.5 * 1000);
      const parents = await fetchParents({ matronId, sireId });

      return parents;
    });

    matron = parents.matron;
    sire = parents.sire;
    axiesDocument.insert([{ ...matron }, { ...sire }]);
  }

  return { matron, sire };
};
