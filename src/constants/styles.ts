import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginTop: 55,
    paddingHorizontal: 14,
    height: 48,
    backgroundColor: "#F3F3F3",
    borderRadius: 12,
  },

  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
  },

  content: {
    paddingHorizontal: 16,
    paddingBottom: 90,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 24,
    marginBottom: 12,
    color: "#222",
  },

  categoryCard: {
    width: 105,
    height: 95,
    backgroundColor: "#F1F8F4",
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  categoryText: {
    marginTop: 8,
    fontSize: 13,
    fontWeight: "600",
    color: "#333",
  },

  productContainer: {
    gap: 12,
  },

  productCard: {
    flexDirection: "row",
    padding: 12,
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },

  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: "#F1F8F4",
    alignItems: "center",
    justifyContent: "center",
  },

  productInfo: {
    flex: 1,
    marginLeft: 12,
  },

  productName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 5,
  },

  condition: {
    fontSize: 13,
    color: "#666",
    marginBottom: 6,
  },

  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },

  location: {
    fontSize: 12,
    color: "#777",
    marginLeft: 3,
  },

  bottomNavigation: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E5E5E5",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  navItem: {
    alignItems: "center",
    justifyContent: "center",
  },

  activeNavText: {
    fontSize: 11,
    marginTop: 3,
    color: "#2E8B57",
    fontWeight: "600",
  },

  navText: {
    fontSize: 11,
    marginTop: 3,
    color: "#777",
  },
});
