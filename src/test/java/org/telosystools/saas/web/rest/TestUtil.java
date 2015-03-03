package org.telosystools.saas.web.rest;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.telosystools.saas.domain.Author;
import org.springframework.http.MediaType;

import java.io.IOException;
import java.nio.charset.Charset;

/**
 * Utility class for testing REST controllers.
 */
public class TestUtil {

    /** MediaType for JSON UTF8 */
    public static final MediaType APPLICATION_JSON_UTF8 = new MediaType(
            MediaType.APPLICATION_JSON.getType(),
            MediaType.APPLICATION_JSON.getSubtype(), Charset.forName("utf8"));

    /**
     * Convert an object to JSON byte array.
     *
     * @param object
     *            the object to convert
     * @return the JSON byte array
     * @throws IOException
     */
    public static byte[] convertObjectToJsonBytes(Object object)
            throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        mapper.setSerializationInclusion(JsonInclude.Include.NON_NULL);
        return mapper.writeValueAsBytes(object);
    }

    /**
     * Convert an object to JSON String.
     *
     * @param object
     *            the object to convert
     * @return the JSON String
     * @throws IOException
     */

    public static String convertObjectToJsonString(Object object) throws IOException {
        ObjectMapper mapper = new ObjectMapper();

        return mapper.writeValueAsString(object);
    }

    /**
     * Convert a author to JSON String. Use to handle date format
     * format "1977-12-19T00:00:00.000Z" send by the javascript client
     * @param author
     * @return
     */
    public static String convertAuthorToJsonString(Author author) {
        ObjectMapper mapper = new ObjectMapper();
        ObjectNode jsonObject = mapper.valueToTree(author);
        String dateToConvert = jsonObject.get("birthDate").asText();
        jsonObject.remove("birthDate");
        jsonObject.put("birthDate",dateToConvert + "T00:00:00.000Z");
        String string = jsonObject.toString();
        return string;
    }
}