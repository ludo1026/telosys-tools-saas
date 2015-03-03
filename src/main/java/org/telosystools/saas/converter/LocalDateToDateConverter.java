package org.telosystools.saas.converter;

/**
 * Created by BWI on 27/02/15.
 */

import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Date;

/**
 * This class is a converter used by SpringData, to convert a Java 8 LocalDate to a Date object.
 */
@Component
public class LocalDateToDateConverter implements Converter<LocalDate, Date>
{

    @Override
    public Date convert(LocalDate source) {
        Instant instant = source.atStartOfDay().atZone(ZoneId.systemDefault()).toInstant();
        return Date.from(instant);
    }
}