package org.telosystools.saas.converter;

/**
 * Created by BWI on 27/02/15.
 */

import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Date;

/**
 * This class is a converter used by SpringData, to convert a Date to a Java 8 LocalDate object.
 */
@Component
public class DateToLocalDateConverter implements Converter<Date, LocalDate>
{
    @Override
    public LocalDate convert(Date source) {
        return source.toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
    }
}