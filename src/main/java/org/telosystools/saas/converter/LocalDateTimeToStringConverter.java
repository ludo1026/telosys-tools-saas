package org.telosystools.saas.converter;

/**
 * Created by BWI on 27/02/15.
 */


import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

/**
 * This class is a converter used by SpringData, to convert a Java 8 LocalDateTime to a String.
 */
@Component
public class LocalDateTimeToStringConverter implements Converter<LocalDateTime, String> {
    /**
     * This function uses the {@link java.time.LocalDateTime#toString toString} method of LocalDateTime, to convert the source object to a String.
     * @param source The source LocalDateTime object.
     * @return The String representation of the source object.
     */

    @Override
    public String convert(LocalDateTime source) {
        return source == null ? null : source.toString();
    }
}