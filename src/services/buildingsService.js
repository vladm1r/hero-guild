import { GUILD } from "../constants/buildingConstants";

class BuildingsService {
  getGuildRank(level) {
    return GUILD[level].name;
  }

  getGuildPrice(level) {
    return GUILD[level].price;
  }

  getGuildMax() {
    return GUILD.length;
  }
}

export const buildingsService = new BuildingsService();
