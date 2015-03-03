package org.telosystools.saas.converter;

/**
 * Created by BWI on 27/02/15.
 */
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

/**
 * This class is a converter used by SpringData, to convert a String to a Java 8 LocalDate object.
 */
@Component
public class StringToLocalDateConverter implements Converter<String, LocalDate>
{
    /**
     * This function uses the {@link java.time.LocalDate#parse parse} method of LocalDate, to convert the source String to a LocalDate object.
     * @param source The source String.
     * @return The object representation of the String.
     */
    @Override
    public LocalDate convert(String source) {
        return source == null ? null : LocalDate.parse(source);
    }
}