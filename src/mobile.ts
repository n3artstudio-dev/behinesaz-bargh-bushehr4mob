/* راه‌اندازی Capacitor فقط در حالت اپ اندروید (بدون وابستگی build وب) */
export async function initMobile() {
  try {
    const cap: any = (window as any).Capacitor;
    if (!cap?.isNativePlatform?.()) return;
    const P = cap.Plugins ?? {};
    if (P.StatusBar) {
      await P.StatusBar.setBackgroundColor?.({ color: "#0b1a33" });
      await P.StatusBar.setOverlaysWebView?.({ overlay: false });
    }
    if (P.SplashScreen) await P.SplashScreen.hide?.();
    // جلوگیری از اسکرول و زوم تصادفی داخل بازی
    document.addEventListener(
      "touchmove",
      (e) => {
        const t = e.target as HTMLElement;
        if (!t.closest("input, textarea, .ss-panel, [data-scroll]")) e.preventDefault();
      },
      { passive: false },
    );
    document.addEventListener("gesturestart", (e) => e.preventDefault());
    document.addEventListener("contextmenu", (e) => e.preventDefault());
  } catch {
    /* تحت وب معمولی — کاری لازم نیست */
  }
}
