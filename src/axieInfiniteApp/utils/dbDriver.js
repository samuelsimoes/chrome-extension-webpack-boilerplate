import loki from "lokijs";

const Adapter = loki.prototype.getIndexedAdapter();
var idbAdapter = new Adapter();

var db = new loki("axie_extension.db", {
  adapter: idbAdapter,
  autoload: true,
  autoloadCallback: databaseInitialize,
  autosave: true,
  autosaveInterval: 4000,
});

function databaseInitialize() {
  if (!db.getCollection("axies_list")) {
    db.addCollection("axies_list");
  }
}

window.db = db;

export default db;
