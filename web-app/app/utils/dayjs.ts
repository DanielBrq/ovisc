import dayjs from 'dayjs'
import 'dayjs/locale/es'
import relativeTime from 'dayjs/plugin/relativeTime'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

// Configuración global de dayjs
dayjs.locale('es')
dayjs.extend(relativeTime)
dayjs.extend(localizedFormat)
dayjs.extend(utc)
dayjs.extend(timezone)

/**
 * Format ISO 8601.
 */
export const DATE_STANDARD = 'toISOString'

/**
 * Format for interoperability with Lucide DATE columns
 */
export const DB_DATE_FORMAT = 'YYYY-MM-DD'

/**
 * Hook of utilities for date handling in the entire system
 */
export const useDate = () => {

    /**
     * Returns the current date in the system's standard format
     */
    const nowDate = () => dayjs().utc().toDate();

    const nowIso = () => dayjs().utc().toISOString();

    /**
     * Converts any input (ISO string or Date) to Date
     */
    const toDate = (input: string | Date | dayjs.Dayjs): Date => {
        return dayjs(input).utc().toDate();
    };

    /**
     * Converts Date to ISO string (always in UTC)
     */
    const toIso = (date: Date | string | dayjs.Dayjs | null): string => {
        return dayjs(date).utc().toISOString();
    };
    /**
     * Returns the date in a semantic format: "Monday, 8th November"
     */
    const toSemantic = (date?: dayjs.ConfigType): string => {
        if (!date) return ''
        const d = dayjs(date)
        const text = d.format('dddd D [de] MMMM')
        return text.charAt(0).toUpperCase() + text.slice(1)
    }

    /**
     * Returns the date in a semantic format with the year: "Monday, 8th November 2025"
     */
    const toSemanticFull = (date?: dayjs.ConfigType): string => {
        if (!date) return ''
        const d = dayjs(date)
        const text = d.format('dddd D [de] MMMM [de] YYYY')
        return text.charAt(0).toUpperCase() + text.slice(1)
    }

    /**
     * Returns the time in 12-hour format: "04:30 PM"
     */
    const toTime12h = (date?: dayjs.ConfigType): string => {
        if (!date) return ''
        return dayjs(date).format('hh:mm A')
    }

    /**
     * Flexible time formatter
     * @param date Date to format
     * @param config Visibility and format configuration
     */
    const formatTime = (
        date?: dayjs.ConfigType,
        config: {
            hour?: boolean,
            minute?: boolean,
            second?: boolean,
            is12h?: boolean
        } = {}
    ): string => {
        if (!date) return ''
        const { hour = true, minute = true, second = false, is12h = false } = config

        const parts: string[] = []
        if (hour) parts.push(is12h ? 'hh' : 'HH')
        if (minute) parts.push('mm')
        if (second) parts.push('ss')

        let format = parts.join(':')
        let result = dayjs(date).format(format)

        if (is12h && hour) {
            result += ' ' + dayjs(date).format('A')
        }

        return result
    }

    /**
     * Returns "Hoy", "Ayer" or the relative formatted date
     */
    const toRelative = (date?: dayjs.ConfigType): string => {
        if (!date) return ''
        return dayjs(date).fromNow()
    }

    /**
     * Calculates age from birth date
     * @param bornDate Birth date
     */
    const calculateAge = (bornDate?: dayjs.ConfigType): number => {
        if (!bornDate) return 0
        return dayjs().diff(dayjs(bornDate), 'year')
    }

    /**
     * Converts Date to 'YYYY-MM-DD' for date inputs
     */
    const toIsoDate = (date: Date | string | dayjs.Dayjs | null): string => {
        if (!date) return '';
        return dayjs(date).format('YYYY-MM-DD');
    };

    return {
        dayjs,
        toSemantic,
        toSemanticFull,
        formatTime,
        toTime12h,
        toRelative,
        calculateAge,
        nowDate,
        toIso,
        toIsoDate,
        toDate,
        nowIso
    }
}
