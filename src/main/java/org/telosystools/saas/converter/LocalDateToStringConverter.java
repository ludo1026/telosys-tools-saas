package org.telosystools.saas.converter;

/**
 * Created by BWI on 27/02/15.
 */
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

/**
 * This class is a converter used by SpringData, to convert a Java 8 LocalDate to a String.
 */
@Component
public class LocalDateToStringConverter implements Converter<LocalDate, String>
{
    /**
     * This function uses the {@link java.time.LocalDate#toString toString} method of LocalDate, to convert the source object to a String.
     * @param source The source LocalDate object.
     * @return The String representation of the source object.
     */
    @Override
    public String convert(LocalDate source) {
        return source == null ? null : source.toString();
    }
}