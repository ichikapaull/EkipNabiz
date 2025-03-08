import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * className yardımcı fonksiyonu, Tailwind CSS sınıflarını birleştirerek
 * çakışmaları önler ve koşullu sınıf atamasını kolaylaştırır.
 * 
 * @example
 * // Temel kullanım
 * <div className={cn("base-class", isActive && "active-class")}></div>
 * 
 * // Çakışan sınıfları birleştirme
 * <div className={cn("p-4 bg-red-500", "p-6 bg-blue-500")}></div>
 * // Sonuç: "p-6 bg-blue-500" (son verilen değerler öncelikli)
 * 
 * @param inputs - Birleştirilecek className değerleri
 * @returns Optimize edilmiş className string'i
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
} 