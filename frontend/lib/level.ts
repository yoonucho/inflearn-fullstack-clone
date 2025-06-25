export function getLevelText(level: string) {
  switch (level.toLowerCase()) {
    case "BEGINNER":
      return "초급";
    case "INTERMEDIATE":
      return "중급";
    case "ADVANCED":
      return "고급";
    default:
      return level;
  }
}
