package org.telosystools.saas.converter;

/**
 * Created by BWI on 27/02/15.
 */
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

/**
 * This class is a converter used by SpringData, to convert a String to a Java 8 LocalDateTime object.
 */
@Component
public class StringToLocalDateTimeConverter implements Converter<String, LocalDateTime>
{
    /**
     * This function uses the {@link java.time.LocalDateTime#parse parse} method of LocalDateTime, to convert the source String to a LocalDateTime object.
     * @param source The source String.
     * @return The object representation of the String.
     */
    @Override
    public LocalDateTime convert(String source) {
        return source == null ? null : LocalDateTime.parse(source);
    }
}