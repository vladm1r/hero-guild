import { random } from "../utils/random";
import { defaultHero } from "../constants/heroConstants";
import { GUILD } from "../constants/buildingConstants";

class HeroService {
  generateNewStats(lvl) {
    const stats = [];
    for (let stat of defaultHero) {
      let item = {};
      item.name = stat;
      item.value = Math.round(random.gaussian(0, GUILD.heroStatsMax[lvl], 1));
      stats.push(item);
    }
    return stats;
  }
}

export const heroService = new HeroService();
