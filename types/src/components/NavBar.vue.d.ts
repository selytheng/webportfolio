declare const _default: import("vue").DefineComponent<{}, {
    isMenuOpen: import("vue").Ref<boolean, boolean>;
    activeSection: import("vue").Ref<string, string>;
    navItems: string[];
    toggleMenu: () => void;
    closeMenu: () => void;
    scrollToSection: (section: string) => void;
    handleMenuClick: (section: string) => void;
    handleImageError: (event: Event) => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
