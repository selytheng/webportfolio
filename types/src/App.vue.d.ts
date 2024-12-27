declare const _default: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {
    NavBar: import("vue").DefineComponent<{}, {
        isMenuOpen: import("vue").Ref<boolean, boolean>;
        activeSection: import("vue").Ref<string, string>;
        navItems: string[];
        toggleMenu: () => void;
        closeMenu: () => void;
        scrollToSection: (section: string) => void;
        handleMenuClick: (section: string) => void;
        handleImageError: (event: Event) => void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    HeroSection: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, HTMLElement>;
    SkillsSection: import("vue").DefineComponent<{}, {}, {
        skills: import("./types/types.js").Skill[];
    }, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    ExperienceSection: import("vue").DefineComponent<{}, {}, {
        experiences: import("./types/types.js").Experience[];
    }, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    ProjectsSection: import("vue").DefineComponent<{}, {
        currentCategory: import("vue").Ref<string, string>;
        categories: string[];
        filteredProjects: import("vue").ComputedRef<import("./types/types.js").Project[]>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    ContactSection: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, HTMLElement>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
