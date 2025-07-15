export const validateEmailWithDomain = (email: string) => {
    const regex = /^[^\s@]+@([^\s@]+\.[^\s@]+)$/;
    const match = email.match(regex)
    if (!match) return false;

    const domain = match[1].toLowerCase();
    const validateDomains = ["gmail.com", "hotmail.com", "outlook.es", "outlook.com", "yahoo.com", "yahoo.es", "hotmail.es"]

    return validateDomains.includes(domain);
}