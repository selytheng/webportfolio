import { defineComponent, ref, onMounted, onUnmounted } from 'vue';
export default defineComponent({
    name: 'NavBar',
    setup() {
        const isMenuOpen = ref(false);
        const activeSection = ref('');
        const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];
        const toggleMenu = () => {
            isMenuOpen.value = !isMenuOpen.value;
        };
        const closeMenu = () => {
            isMenuOpen.value = false;
        };
        const scrollToSection = (section) => {
            const element = document.getElementById(section);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                activeSection.value = section;
            }
        };
        const handleMenuClick = (section) => {
            scrollToSection(section);
            closeMenu();
        };
        const handleImageError = (event) => {
            const target = event.target;
            target.onerror = null; // Prevent infinite loop if fallback fails
            target.src =
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'/%3E%3Ccircle cx='12' cy='7' r='4'/%3E%3C/svg%3E";
        };
        const checkActiveSection = () => {
            const sections = navItems.map((item) => ({
                id: item.toLowerCase(),
                element: document.getElementById(item.toLowerCase()),
            }));
            const currentSection = sections.find((section) => {
                if (section.element) {
                    const rect = section.element.getBoundingClientRect();
                    return rect.top <= 150 && rect.bottom >= 150;
                }
                return false;
            });
            activeSection.value = currentSection ? currentSection.id : '';
        };
        const throttle = (func, limit) => {
            let inThrottle;
            return function (...args) {
                if (!inThrottle) {
                    func.apply(this, args);
                    inThrottle = true;
                    setTimeout(() => (inThrottle = false), limit);
                }
            };
        };
        onMounted(() => {
            window.addEventListener('scroll', throttle(checkActiveSection, 100));
            checkActiveSection();
        });
        onUnmounted(() => {
            window.removeEventListener('scroll', throttle(checkActiveSection, 100));
        });
        return {
            isMenuOpen,
            activeSection,
            navItems,
            toggleMenu,
            closeMenu,
            scrollToSection,
            handleMenuClick,
            handleImageError, // Add this method to the return object
        };
    },
}); /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("fixed w-full flex justify-center top-6 z-50") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({
        ...{ class: ("bg-white/60 dark:bg-gray-950/50 backdrop-blur-md text-gray-700 dark:text-gray-200 rounded-full shadow-lg transition-colors duration-300 mx-4 border border-gray-200/20 dark:border-gray-800/20") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("px-6 py-3") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex items-center justify-between") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex items-center gap-3") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("w-8 h-8 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 border-2 border-gray-200/20 dark:border-gray-800/20") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
        ...{ onError: (__VLS_ctx.handleImageError) },
        src: ("../assets/img/profile.jpg"),
        alt: ("Profile"),
        ...{ class: ("w-full h-full object-cover") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("text-xl font-bold text-gray-800 dark:text-white") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("hidden md:flex space-x-2 ml-6") },
    });
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.navItems))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
            ...{ onClick: (...[$event]) => {
                    __VLS_ctx.scrollToSection(item.toLowerCase());
                } },
            key: ((item)),
            href: (('#' + item.toLowerCase())),
            ...{ class: (([
                    'px-4 py-2 rounded-full transition-all duration-300 relative',
                    __VLS_ctx.activeSection === item.toLowerCase()
                        ? 'bg-gray-100 dark:bg-gray-800 text-primary dark:text-blue-400'
                        : 'hover:bg-white/80 dark:hover:bg-gray-800/60 hover:text-primary dark:hover:text-blue-400',
                ])) },
        });
        (item);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (__VLS_ctx.toggleMenu) },
        ...{ class: ("md:hidden p-2 rounded-full hover:bg-white/80 dark:hover:bg-gray-800/60") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({
        ...{ class: ("fas fa-bars text-gray-800 dark:text-white") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("md:hidden absolute top-20 right-4 bg-white/60 dark:bg-gray-950/50 backdrop-blur-md rounded-2xl shadow-lg p-2 min-w-[200px] border border-gray-200/20 dark:border-gray-800/20") },
    });
    __VLS_asFunctionalDirective(__VLS_directives.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.isMenuOpen) }, null, null);
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.navItems))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
            ...{ onClick: (...[$event]) => {
                    __VLS_ctx.handleMenuClick(item.toLowerCase());
                } },
            key: ((item)),
            href: (('#' + item.toLowerCase())),
            ...{ class: (([
                    'block px-4 py-2 rounded-xl text-gray-700 dark:text-gray-200 transition-all duration-300',
                    __VLS_ctx.activeSection === item.toLowerCase()
                        ? 'bg-gray-100 dark:bg-gray-800 text-primary dark:text-blue-400'
                        : 'hover:bg-white/80 dark:hover:bg-gray-800/60 hover:text-primary dark:hover:text-blue-400',
                ])) },
        });
        (item);
    }
    ['fixed', 'w-full', 'flex', 'justify-center', 'top-6', 'z-50', 'bg-white/60', 'dark:bg-gray-950/50', 'backdrop-blur-md', 'text-gray-700', 'dark:text-gray-200', 'rounded-full', 'shadow-lg', 'transition-colors', 'duration-300', 'mx-4', 'border', 'border-gray-200/20', 'dark:border-gray-800/20', 'px-6', 'py-3', 'flex', 'items-center', 'justify-between', 'flex', 'items-center', 'gap-3', 'w-8', 'h-8', 'rounded-full', 'overflow-hidden', 'bg-gray-200', 'dark:bg-gray-700', 'border-2', 'border-gray-200/20', 'dark:border-gray-800/20', 'w-full', 'h-full', 'object-cover', 'text-xl', 'font-bold', 'text-gray-800', 'dark:text-white', 'hidden', 'md:flex', 'space-x-2', 'ml-6', 'px-4', 'py-2', 'rounded-full', 'transition-all', 'duration-300', 'relative', 'md:hidden', 'p-2', 'rounded-full', 'hover:bg-white/80', 'dark:hover:bg-gray-800/60', 'fas', 'fa-bars', 'text-gray-800', 'dark:text-white', 'md:hidden', 'absolute', 'top-20', 'right-4', 'bg-white/60', 'dark:bg-gray-950/50', 'backdrop-blur-md', 'rounded-2xl', 'shadow-lg', 'p-2', 'min-w-[200px]', 'border', 'border-gray-200/20', 'dark:border-gray-800/20', 'block', 'px-4', 'py-2', 'rounded-xl', 'text-gray-700', 'dark:text-gray-200', 'transition-all', 'duration-300',];
    var __VLS_slots;
    var $slots;
    let __VLS_inheritedAttrs;
    var $attrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
let __VLS_self;
