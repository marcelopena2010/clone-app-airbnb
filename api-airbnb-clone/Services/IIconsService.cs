using api_airbnb_clone.Models;

namespace api_airbnb_clone.Services
{
    public interface IIconsService
    {
        List<Icons> GetAllIcons();

        Icons? GetIconsByID(int id);

        Icons AddIcons(AddUpdateIcons obj);

        Icons? UpdateIcons(int id, AddUpdateIcons obj);

        bool DeleteIconsByID(int id);
    }
}
