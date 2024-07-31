using api_airbnb_clone.Models;

namespace api_airbnb_clone.Services
{
    public class IconsService : IIconsService
    {
        private readonly List<Icons> _iconsList;
        public IconsService() => _iconsList = new List<Icons>()
            {
                new Icons(){
                    //Id = 1,
                    IconsName = "Icons",
                    IconsDesigns = "Icons"
                }
            };

        public List<Icons> GetAllIcons()
        {
            return _iconsList.ToList();
        }

        public Icons? GetIconsByID(int id)
        {
            return _iconsList.FirstOrDefault(icon => icon.Id == id);
        }

        public Icons AddIcons(AddUpdateIcons obj)
        {
            var addIcon = new Icons()
            {
                Id = _iconsList.Max(icon => icon.Id) + 1,
                IconsName = obj.IconsName,
                IconsDesigns = obj.IconsDesigns
            };

            _iconsList.Add(addIcon);

            return addIcon;
        }

        public Icons? UpdateIcons(int id, AddUpdateIcons obj)
        {
            var iconIndex = _iconsList.FindIndex(index => index.Id == id);
            if (iconIndex > 0)
            {
                var icon = _iconsList[iconIndex];

                icon.IconsName = obj.IconsName;
                icon.IconsDesigns = obj.IconsDesigns;

                _iconsList[iconIndex] = icon;

                return icon;
            }
            else
            {
                return null;
            }
        }
        public bool DeleteIconsByID(int id)
        {
            var iconIndex = _iconsList.FindIndex(index => index.Id == id);
            if (iconIndex >= 0)
            {
                _iconsList.RemoveAt(iconIndex);
            }
            return iconIndex >= 0;
        }
    }
}
