export function replaceIcons(text) {
  return text.replace(
    /\[icon:([^:\]]+)(?::([^:\]]+))?\]/g,
    (_, icon, variant) => {
      const filledClass =
        variant === "filled"
          ? "article-icon-filled"
          : "";
      return `<span class="material-symbols-outlined article-icon ${filledClass}">${icon}</span>`;
    }
  );
}