package ru.kpfu.pizza.util;


public final class PropertyPath {

    private static String path;


    public void setPath(String path) {
        this.path = path;
    }

    public static String getPath() {
        return path;
    }
}
