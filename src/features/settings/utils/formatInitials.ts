export const formatInitials = (name: string) => {
  const names = name.split(' ');

  if (names.length === 1) {
    return names[0].charAt(0).toUpperCase();
  } else if (names.length > 1) {
    const firstInitial = names[0].charAt(0);
    const lastInitial = names[names.length - 1].charAt(0);
    return `${firstInitial}${lastInitial}`.toUpperCase();
  }

  return '';
};
