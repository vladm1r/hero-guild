import { GUILD } from "../constants/buildingConstants";

class BuildingsService {
  getGuildRank(level) {
    return GUILD.ranks[level];
  }

  getGuildPrice(level) {
    return GUILD.prices[level];
  }

  getGuildMax() {
    return GUILD.max;
  }
}

export const buildingsService = new BuildingsService();
